import subprocess, time, json, urllib.request, base64, sys

def capture(url, out_path, width, height, mobile=False, full_page=False):
    cmd = [
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        '--headless=new',
        '--remote-debugging-port=9225',
        '--disable-gpu',
        '--no-sandbox',
        f'--window-size={width},{height}',
        url
    ]
    proc = subprocess.Popen(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    time.sleep(2)
    try:
        req = urllib.request.urlopen('http://localhost:9225/json')
        tabs = json.loads(req.read().decode())
        target_ws = None
        for t in tabs:
            if t.get('type') == 'page':
                target_ws = t.get('webSocketDebuggerUrl')
                break
        if not target_ws:
            print("No page tab found")
            return

        import websocket
        ws = websocket.create_connection(target_ws)
        
        # Override device metrics
        ws.send(json.dumps({
            "id": 1,
            "method": "Emulation.setDeviceMetricsOverride",
            "params": {
                "width": width,
                "height": height,
                "deviceScaleFactor": 1,
                "mobile": mobile
            }
        }))
        ws.recv()

        # Wait a bit for layout
        time.sleep(1)

        # Capture screenshot
        ws.send(json.dumps({
            "id": 2,
            "method": "Page.captureScreenshot",
            "params": {
                "format": "png",
                "captureBeyondViewport": full_page
            }
        }))
        res = json.loads(ws.recv())
        img_data = base64.b64decode(res['result']['data'])
        with open(out_path, 'wb') as f:
            f.write(img_data)
        print(f"Captured {out_path} ({width}x{height})")
        ws.close()
    finally:
        proc.terminate()
        proc.wait()

if __name__ == '__main__':
    artifact_dir = '/Users/zhuxiaojie/.gemini/antigravity/brain/5725d797-7526-453a-b551-12def8071512'
    capture('http://localhost:8089/03/', f'{artifact_dir}/scheme03_redesign_desktop_1600.png', 1600, 1050, mobile=False)
    time.sleep(1)
    capture('http://localhost:8089/03/', f'{artifact_dir}/scheme03_redesign_tablet_820.png', 820, 1180, mobile=False)
    time.sleep(1)
    capture('http://localhost:8089/03/', f'{artifact_dir}/scheme03_redesign_mobile_390.png', 390, 844, mobile=True)

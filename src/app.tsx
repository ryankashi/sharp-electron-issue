// app.tsx

import { createRoot } from "react-dom/client";

const root = createRoot(document.body);
root.render(<Homepage />);

function Homepage() {
  return (
    <div>
      <div>Tested via electron-forge on Windows 10, 64bit.</div>
      <div>
        Built via:
        https://www.electronforge.io/guides/framework-integration/react-with-typescript
      </div>
      <div>
        Following packaging instructions via:
        https://sharp.pixelplumbing.com/install
      </div>
      <div>
        This application will not work properly once this app is built and
        packaged.
      </div>
    </div>
  );
}

import app from "./app.js";

import config from "./config.js";

const PORT = config.port || 8000;

(() => {
  app.listen(PORT, () => {
    console.log(`server is listening on PORT ${config.port}`);
  });
})();

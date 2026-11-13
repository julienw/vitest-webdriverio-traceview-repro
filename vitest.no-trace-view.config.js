import { mergeConfig } from "vitest/config";
import config from "./vitest.config.js";

export default mergeConfig(config, { test: { browser: { traceView: "off" } } });

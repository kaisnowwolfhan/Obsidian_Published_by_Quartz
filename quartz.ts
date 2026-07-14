import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

// --- 中文 Graph 修正補丁：自動解碼局部圖表的網址 ---

// ------------------------------------------------

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()

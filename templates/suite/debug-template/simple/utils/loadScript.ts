/**
 * 动态加载script脚本
 *
 * @param {string} url js链接
 * @return {Promise<void>} 返回Promise
 * @example
 * loadScript('https://h5.dingtalk.com').then(() => {
 *  console.log('done');
 * });
 */
function loadScript(url: string, attributes?: { id: string }) {
  return new Promise((resolve, reject) => {
    const parent = document.head || document.body || document.documentElement;
    const script = document.createElement('script');
    const loadend = () => {
      script.onerror = null;
      script.onload = null;
    };
    if (attributes?.id) {
      script.id = attributes.id;
    }
    script.onerror = () => {
      const err = new Error(`Failed to load script: ${url}`);

      loadend();
      reject(err);
    };
    script.onload = () => {
      loadend();
      resolve(url);
    };
    script.async = true;
    script.src = url;
    script.crossOrigin = 'anonymous';
    parent.appendChild(script);
  });
}

export default loadScript;

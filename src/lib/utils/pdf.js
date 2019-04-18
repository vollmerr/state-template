// TODO: deprecate..

// convert from binary to array buffer
export const base64ToArrayBuffer = (base64) => {
  const binaryString = window.atob(base64);
  const binaryLen = binaryString.length;
  const bytes = new Uint8Array(binaryLen);

  return bytes.map((v, i) => binaryString.charCodeAt(i));
};

// make into blob and save
export const saveByteArray = (function _saveByteArray() {
  const a = document.createElement('a');
  document.body.appendChild(a);

  return (data, name) => {
    const blob = new Blob(data, { type: 'octet/stream' });

    // IE...
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, name);
    } else {
      const url = window.URL.createObjectURL(blob);

      a.href = url;
      a.download = name;
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };
}());

export const savePdf = (pdf, name) => {
  const content = base64ToArrayBuffer(pdf);

  saveByteArray([content], name);
};

export default class ArrayBufferConverter {
  load(buffer) {
    this.bufferView = new Uint16Array(buffer);
  }

  toString() {
    let dataStr = '';
    for (let i = 0; i < this.bufferView.length; i += 1) {
      dataStr += String.fromCharCode(this.bufferView[i]);
    }
    return dataStr;
  }
}

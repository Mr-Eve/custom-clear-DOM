/** Show some tips when user is selecting DOM */
function showSelectTip(): void {
  const template = $(`
  <div class="cds-element" data-from="cds">
    <div id="cds-dom-setting-panel" data-from="cds">
      <div class="content-text" data-from="cds">
        点击左键可以选中需要自定义的内容<br/>
        <a href="javascript:showInfo()" data-from="cds-cancel">点击此处取消选择</a>
      </div>
    </div>
  </div>
  `);
  $('body').append(template);
}

// Show toast message on web page
function toast(info: string, type: 'danger' | 'warning'): void {
  const template = $(`
  <div class="cds-element" data-from="cds">
    <div class="cds-toast cds-toast-${type}">
      ${info}
    </div>
  </div>
  `);
  $('body').append(template);
  setTimeout(() => {
    template.find('.cds-toast').addClass('cds-toast-leave');
    setTimeout(() => {
      template.remove();
    }, 400);
  }, 2000);
}
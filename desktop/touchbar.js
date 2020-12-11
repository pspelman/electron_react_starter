const {TouchBar} = require('electron')
// touchbar spacers
const tbSpacerSM = () => new TouchBar.TouchBarSpacer({size: 'small'})
const tbSpacerLG = () => new TouchBar.TouchBarSpacer({size: 'large'})
const tbSpacerFLX = () => new TouchBar.TouchBarSpacer({size: 'flexible'})


module.exports = (mainWindow) => {
  // Touchbar Label
  const tbLabel = new TouchBar.TouchBarLabel({
    label: 'NewApp',
  })

  // Touchbar button
  function tbAddNew() {
    return new TouchBar.TouchBarButton({
      label: 'new readIt',
      backgroundColor: '#0595DE',
      click: () => {
        mainWindow.send('menu-show-modal')
      }
    })
  }

  // DevTools button
  function tbDevTools() {
    return new TouchBar.TouchBarButton({
      label: 'DevTools',
      icon: `${__dirname}/file-code-solid@2x.png`,
      iconPosition: 'left',
      click: () => {
        mainWindow.webContents.toggleDevTools()
      }
    })
  }

  // Touchbar Color Picker
  function tbPicker() {
    return new TouchBar.TouchBarColorPicker({
      change: color => {
        mainWindow.send('menu-set-background-color', {color: color})
        mainWindow.webContents.insertCSS(`body {background-color: ${color};}`)
      }
    })
  }


  // Touchbar Slider
  function tbSlider() {
    return new TouchBar.TouchBarSlider({
      label: 'Size',
      minValue: 500,
      maxValue: 1000,
      value: 500, // this is the initial value
      change: val => {
        console.log(`trying to change the size of the window to ${val}`,)
        mainWindow.setSize(val, val, true)  // true value makes the window resizing smoother
      }
    })
  }

  function tbPopover() {
    return new TouchBar.TouchBarPopover({
      label: 'Size',
      items: new TouchBar({
        items: [tbSlider()]
      })
    })
  }

  // Create the new touchbar
  function touchbar() {
    return (
      new TouchBar({
        items: [
          tbLabel,
          tbSpacerLG(),
          tbPicker(),
          tbSlider(),
          // tbPopover(),
          tbSpacerFLX(),
          tbAddNew(),
          tbSpacerSM(),
          tbDevTools(),
        ],  // touchbar components created from touchbar submodules
        // escapeItem: null  // Note: this is for the case where the Escape key on the touchbar is to be replaced
      })
    )
  }

  return touchbar();

};





import React from 'react';

class SettingsBar extends React.PureComponent {
  setHighContrast = () => {
    document.getElementsByTagName('html')[0].classList.add('high-contrast');
    localStorage.setItem('highContrast', 'on');
  }

  clearHighContrast = () => {
    document.getElementsByTagName('html')[0].classList.remove('high-contrast');
    localStorage.removeItem('highContrast');
  }

  updateFont = ({ amount }) => {
    const current = Number(document.body.style.zoom) || 1;
    document.body.style.zoom = current + amount;
    localStorage.setItem('zoom', document.body.style.zoom);
  }

  increaseFont = () => {
    this.updateFont({ amount: 0.1 });
  }

  descreaseFont = () => {
    this.updateFont({ amount: -0.1 });
  }

  resetFont = () => {
    document.body.style.zoom = 1;
    localStorage.setItem('zoom', 1);
  }

  render() {
    const { isSettingsOpen, toggleSettingsOpen } = this.props;
    const openClass = isSettingsOpen ? 'in' : '';

    return (
      <div className={`site-settings section section-standout collapse collapsed ${openClass}`} role="alert" id="siteSettings">
        <div className="container  p-y">
          <button onClick={toggleSettingsOpen} type="button" className="close" aria-expanded="false" aria-controls="siteSettings" aria-label="Close"><span aria-hidden="true">&times;</span></button>

          <div className="btn-group btn-group-justified-sm" role="group" aria-label="contrastMode">
            <div className="btn-group">
              <button onClick={this.clearHighContrast} type="button" className="btn btn-standout disableHighContrastMode">Default</button>
            </div>
            <div className="btn-group">
              <button onClick={this.setHighContrast} type="button" className="btn btn-standout enableHighContrastMode">High Contrast</button>
            </div>
          </div>

          <div className="btn-group" role="group" aria-label="textSizeMode">
            <div className="btn-group">
              <button onClick={this.resetFont} type="button" className="btn btn-standout resetTextSize">Reset</button>
            </div>
            <div className="btn-group">
              <button onClick={this.increaseFont} type="button" className="btn btn-standout increaseTextSize">
                <span className="hidden-xs">Increase Font Size</span>
                <span className="visible-xs">
  Font
                  <small className="ca-gov-icon-plus-line" />
                </span>
              </button>

            </div>
            <div className="btn-group">
              <button onClick={this.descreaseFont} type="button" className="btn btn-standout decreaseTextSize">
                <span className="hidden-xs">Decrease Font Size</span>
                <span className="visible-xs">
  Font
                  <small className="ca-gov-icon-minus-line" />
                </span>
              </button>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SettingsBar;

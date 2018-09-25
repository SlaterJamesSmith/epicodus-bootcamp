import React from 'react';
import PropTypes from 'prop-types';

function NavbarBtnIcon(props) {
  const type = props.type;
  let svgPath = null;

  if (type === 'tribar') {
    svgPath = 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z';
  } else if (type === 'video') {
    svgPath = 'M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z';
  } else if (type === 'apps') {
    svgPath = 'M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z';
  } else if (type === 'settings') {
    svgPath = 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z';
  }

  return (
    <svg viewBox="0 0 24 24">
      <style jsx>
        {`
          svg {
            height: 24px;
            width: 24px;
            position: absolute;
            top: 8px;
            left: 8px;
            fill: #999;
          }
        `}
      </style>
      <path d={svgPath}></path>
    </svg>
  );
}

NavbarBtnIcon.propTypes = {
  type: PropTypes.string.isRequired
};

export default NavbarBtnIcon;

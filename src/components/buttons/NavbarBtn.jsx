import React from 'react';
import NavbarBtnIcon from './NavbarBtnIcon';
import PropTypes from 'prop-types';

function NavbarBtn(props) {
  return (
    <button>
      <style jsx>
        {`
          button {
            height: 40px;
            width: 40px;
            position: relative;
            background-color: transparent;
            border: none;
          }
        `}
      </style>
      <div className="circle"></div>
      <NavbarBtnIcon
        type={props.type}
      />
    </button>
  );
}

NavbarBtn.propTypes = {
  type: PropTypes.string.isRequired
};

export default NavbarBtn;

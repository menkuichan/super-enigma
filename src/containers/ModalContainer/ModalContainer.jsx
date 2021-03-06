import React from 'react';
import PropTypes from 'prop-types';

import BackgroundWrapper from './styles';
import SimpleModal from '../../components/Modal';

export default class ModalContainer extends React.PureComponent {
  render() {
    const { open } = this.props;
    const { onClose, modalContent } = this.props;
    return (
      <BackgroundWrapper open={open} onClick={onClose}>
        <SimpleModal
          modalContent={modalContent}
          open={open}
          onClick={this.openModal}
          onClose={onClose}
        />
      </BackgroundWrapper>
    );
  }
}

ModalContainer.defaultProps = {
  modalContent: <div />,
};

ModalContainer.propTypes = {
  modalContent: PropTypes.element,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

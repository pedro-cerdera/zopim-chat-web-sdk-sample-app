'use strict';

import React, { Component } from 'react';
import SystemMessages from 'utils/Messages'

class SystemMessage extends Component {
  constructor(props) {
    super(props);
  }

  getMessageByType(msg) {
    switch (msg.type) {
      case 'chat.memberjoin':
        return this.props.message.display_name + SystemMessages.JOINCHAT;
      case 'chat.memberleave':
        return this.props.message.display_name + SystemMessages.LEFTCHAT;
      case 'chat.wait_queue':
        return SystemMessages.QUEUEMESSAGEBEFORE +  msg.wait_queue + SystemMessages.QUEUEMESSAGEAFTER ;
      default:
        return JSON.stringify(msg);
    }
  }

  render() {
    return (
      <div className="system-msg-container">
        <span className="system-msg">{this.getMessageByType(this.props.message)}</span>
      </div>
    );
  }
}

SystemMessage.displayName = 'SystemMessage';
SystemMessage.propTypes = {
  message: React.PropTypes.object
};
SystemMessage.defaultProps = {
  message: {
    msg: ''
  }
};

export default SystemMessage;

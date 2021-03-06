import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

const StreamDelete = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const actions = (
    <React.Fragment>
      <button
        onClick={() => props.deleteStream(props.stream.id)}
        className="ui button negative"
      >
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </React.Fragment>
  );

  const renderContent = () => {
    if (!props.stream) return "Are you sure you want to delete this stream?";
    return `Are you sure you want to delete this stream title: "${props.stream.title}"`;
  };

  return (
    <Modal
      title="Delete Steam"
      content={renderContent()}
      actions={actions}
      onDismiss={() => history.goBack()}
    />
  );
};

const mapStatetoProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStatetoProps, { fetchStream, deleteStream })(
  StreamDelete
);

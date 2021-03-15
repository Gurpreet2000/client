import React, { useEffect } from "react";
import { connect } from "react-redux";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream } from "../../actions";

const StreamDelete = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const actions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );

  return (
    <div>
      StreamDelete
      <Modal
        title="Delete Steam"
        content="Are you sure you want to delete this stream?"
        actions={actions}
        onDismiss={() => history.goBack()}
      />
    </div>
  );
};

export default connect(null, { fetchStream })(StreamDelete);

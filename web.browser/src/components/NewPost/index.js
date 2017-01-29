import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './styles.css';

const NewPost = ({selectFieldValue, handleSelectChange, selectControlItems }) => (
  <Card className={styles['new-post']}>
    <Paper>
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="Share a new link" />
        </ToolbarGroup>
      </Toolbar>
      <CardText>
        <TextField
          hintText="Title"
          errorText="Please provide a title"
          floatingLabelText="Title"
          rows={1}
        /><br />

        <TextField
          hintText="Description"
          errorText="Please provide a description"
          floatingLabelText="Description"
          rows={1}
        /><br />

        <SelectField
          value={selectFieldValue}
          onChange={handleSelectChange}
          floatingLabelText="Select a lesson"
        >
          {selectControlItems}
        </SelectField><br />

        <TextField
          hintText="Link"
          errorText="You're sharing a link, provide a link"
          floatingLabelText="Link"
          rows={1}
        /><br />

        <TextField
          hintText="Tags"
          floatingLabelText="Tags"
          rows={1}
        /><br />
        <RaisedButton label="Submit" />
      </CardText>
    </Paper>
  </Card>
);

NewPost.propTypes = {
    selectControlItems: PropTypes.array.isRequired,
    // selectFieldValue: PropTypes.array.isRequired,
    handleSelectChange: PropTypes.func.isRequired,
};

export default NewPost;

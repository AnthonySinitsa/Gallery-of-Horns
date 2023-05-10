import React from 'react';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SelectedBeast extends React.Component {

  render() {
    // console.log(this.props)
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card>
              <Card.Img
                src={this.props.selectedBeast.image_url}
                alt={this.props.selectedBeast.alt}
                title={this.props.selectedBeast.title}
              />
              <Card.Body>
                <Card.Text>{this.props.selectedBeast.description}</Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>
        </Modal>
      </>
    )
  }

}

export default SelectedBeast;
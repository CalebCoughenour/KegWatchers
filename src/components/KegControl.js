import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList/KegList';
import KegDetail from './KegDetails/KegDetails';
import EditKegForm from './EditKegForm';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibileOnPage: false,
      mainKegList: [],
      selectedKeg: null,
      editing: false,
      count: 0
    };
  }

  handleClick = () => {
    if(this.state.selectedKeg != null){
      this.setState({
        formVisibileOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibileOnPage: !prevState.formVisibileOnPage
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({
                  mainKegList: newMainKegList,
                  formVisibileOnPage: false}
                  );
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== id);
    this.setState({
      mainKegList: newMainKegList,
      selectedKeg: null
    });
  }

  handleEditingKeg = (kegToEdit) => {
    const editedMainKeg = this.state.mainKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      mainKegList: editedMainKeg,
      editing: false,
      selectedKeg: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleDecrementingPints = () => {
    const kegToDecrement = this.state.selectedKeg;
    if (this.state.selectedKeg.pints !== 0){
        const pintsToDecrement = {
            pints: kegToDecrement.pints -=1
        }
        this.handleChangingSelectedKeg(pintsToDecrement.id)   
    } else {
        this.handleChangingSelectedKeg(this.state.selectedKeg.id)
    }
}

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.editing) {
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKeg} />
      buttonText= "Return to List";
    } else if (this.state.selectedKeg != null) {
        currentlyVisibleState = <KegDetail 
        keg = {this.state.selectedKeg} 
        onClickingDelete = {this.handleDeletingKeg} 
        onClickingEdit = {this.handleEditClick}
        onClickingDecrement = {this.handleDecrementingPints}
      />
      buttonText= "Return to List";
    }
    else if (this.state.formVisibileOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to List";
    } else {
      currentlyVisibleState = <KegList  kegList={this.state.mainKegList} onKegSelection={this.handleChangingSelectedKeg} />
      buttonText = "Add Keg";
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;
import React from 'react';
import {View, TextInput, Text, Button, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTodo} from '../store/ducks/todoSauce';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: '',
    };
  }
  render() {
    return (
      <View style={{margin: 20}}>
        <Text>Todo Name</Text>
        <TextInput
          value={this.state.todoText}
          onChangeText={text => this.setState({todoText: text})}
          underlineColorAndroid="#000"
        />
        <Button
          title="Adicionar TODO"
          onPress={() => {
            this.props.addTodo({
              id: Math.random().toString(),
              name: this.state.todoText,
            });
            this.setState({todoText: ''});
          }}
        />
        <FlatList
          data={this.props.todoList}
          ListHeaderComponent={() => (
            <Text style={{fontSize: 20, marginTop: 10}}>Lista de TODOS</Text>
          )}
          renderItem={({item}) => (
            <Text style={{fontSize: 20, padding: 10}} key={item.id}>
              {item.name}
            </Text>
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    todoList: state.todo.listTodo,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({addTodo}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

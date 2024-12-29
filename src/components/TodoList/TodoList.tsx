import React from 'react';
import { Todo } from '../../types/Todo';
import TodoItem from '../TodoItem/TodoItem';

type Props = {
  todos: Todo[];
  handleDeleteTodo: (todoId: number) => void;
  tempTodo?: Todo | null;
  loading?: boolean;
  handleUpdateTodo: (updatedTodo: Todo) => void;
  loadingTodoId: number | null;
  handleToggleTodo: (todoId: number,  todo: Todo) => void;
  // completedAll?: boolean;
};

const TodoList: React.FC<Props> = React.memo(({ todos, handleDeleteTodo, tempTodo, loading = false, handleUpdateTodo, loadingTodoId, handleToggleTodo }) => {

  return (
    <section className="todoapp__main" data-cy="TodoList">
      {todos.length > 0 &&
        todos.map(todo =>
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            loading={loading}
            handleUpdateTodo={handleUpdateTodo}
            loadingTodoId={loadingTodoId}
            handleToggleTodo={handleToggleTodo}
            // completedAll={completedAll}
          />)}

      {tempTodo && (
        <TodoItem
          todo={tempTodo}
          handleDeleteTodo={() => { }}
          loading={true}
          handleUpdateTodo={() => { }}
          loadingTodoId={loadingTodoId}
          handleToggleTodo= {() => { }}
        />
      )}
    </section>
  );
});

TodoList.displayName = 'TodoList';
export default TodoList;

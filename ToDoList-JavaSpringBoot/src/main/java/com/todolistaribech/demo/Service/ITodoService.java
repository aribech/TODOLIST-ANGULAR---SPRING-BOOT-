package com.todolistaribech.demo.Service;

import com.todolistaribech.demo.Entity.ToDoItem;

import java.util.List;

public interface ITodoService {

    List<ToDoItem> getItems();

    void addItem(ToDoItem item);

    void updateItem(ToDoItem item);

    void deleteItem(int id);
}

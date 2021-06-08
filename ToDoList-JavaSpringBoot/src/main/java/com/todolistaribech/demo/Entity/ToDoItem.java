package com.todolistaribech.demo.Entity;
import org.springframework.data.annotation.Id;

public class ToDoItem {
    @Id
    int id;
    String label;
    boolean done;

    public ToDoItem() {
    }
    public ToDoItem(String label, boolean done) {
        this.label = label;
        this.done = done;
    }
    public ToDoItem(int id, String label, boolean done) {
        this.id = id;
        this.label = label;
        this.done = done;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public boolean isDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }
}

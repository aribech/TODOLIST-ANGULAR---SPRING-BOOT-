package com.todolistaribech.demo.Controller;

import com.todolistaribech.demo.Entity.ToDoItem;
import com.todolistaribech.demo.Service.ITodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("Items")
@CrossOrigin
public class ToDoController {
    @Autowired
    private ITodoService todoService;

    @GetMapping
    public List<ToDoItem> getProduits(){
        return this.todoService.getItems();
    }

    @PostMapping
    public void addProduit(@RequestBody ToDoItem item)
    {
        this.todoService.addItem(item);
    }

    @PutMapping
    public void updateProduit(@RequestBody ToDoItem item)
    {
        this.todoService.updateItem(item);
    }

    @DeleteMapping("/{id}")
    public void deleteProduit(@PathVariable int id) {
        this.todoService.deleteItem(id);
    }
}

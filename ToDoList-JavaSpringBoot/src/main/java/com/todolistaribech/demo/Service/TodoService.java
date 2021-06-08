package com.todolistaribech.demo.Service;
import com.todolistaribech.demo.Entity.ToDoItem;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class TodoService implements ITodoService{

    private List<ToDoItem> items;

    // j'ai creer une liste comme une base de données
    public TodoService() {
        this.items = new ArrayList<>();
        this.items.add(new ToDoItem(1,"item 1",false));
        this.items.add(new ToDoItem(2,"item 2",false));
        this.items.add(new ToDoItem(3,"item 3",false));

    }

    public static int idSeq=3;

    // la methodes pour retourner la liste des taches
    @Override
    public List<ToDoItem> getItems() {
        return items;
    }

    //la méthode pour ajouter une tache
    @Override
    public void addItem(ToDoItem item) {
        idSeq++;
        item.setId(idSeq);
        items.add(item);
    }

    // la methode pour modifier une tache
    @Override
    public void updateItem(ToDoItem item) {
        int index = items.indexOf(items.stream().filter(i->i.getId()==item.getId()).findFirst().get());
        items.remove(index);
        items.add(item);
    }

    //la méthode pour supprimer une tache
    @Override
    public void deleteItem(int id) {
        int index= items.indexOf(items.stream().filter(item->item.getId()==id).findFirst().get());
        items.remove(index);
    }
}

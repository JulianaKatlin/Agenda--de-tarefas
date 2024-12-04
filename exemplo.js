bash
git checkout -b feature/adicionar-tarefa
git checkout -b feature/visualizar-tarefas
git checkout -b feature/editar-tarefa
git checkout -b feature/remover-tarefa

bash
# Para adicionar tarefa
git add .
git commit -m "Implementa funcionalidade de adicionar tarefa"
git checkout main
git merge feature/adicionar-tarefa

# Para visualizar tarefas
git add .
git commit -m "Implementa funcionalidade de visualizar tarefas"
git checkout main
git merge feature/visualizar-tarefas

# Para editar tarefa
git add .
git commit -m "Implementa funcionalidade de editar tarefa"
git checkout main
git merge feature/editar-tarefa

# Para remover tarefa
git add .
git commit -m "Implementa funcionalidade de remover tarefa"
git checkout main
git merge feature/remover-tarefa
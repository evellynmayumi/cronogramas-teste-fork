import { Router } from "express";
import CursoController from "../controllers/controllerCurso";
import UnidadeController from "../controllers/controllerUnidade";
import TurmaController from "../controllers/controllerTurma";

const rotas = Router()


rotas.get("/",(request, response) => {
    return response.json("Home Page")
    }
)

rotas.get("/cursos", new CursoController().create)
rotas.get("/cursos", new CursoController().readAll)
rotas.get("/cursos/:id", new CursoController().readOne)
rotas.get("/cursos/:id", new CursoController().update)
rotas.get("/cursos/:id", new CursoController().delete)

rotas.get("/turmas", new TurmaController().create)
rotas.get("/turmas", new TurmaController().readAll)
rotas.get("/turmas/:id", new TurmaController().readOne)
rotas.get("/turmas/:id", new TurmaController().update)
rotas.get("/turmas/:id", new TurmaController().delete)

rotas.get("/unidades", new UnidadeController().create)
rotas.get("/unidades", new UnidadeController().readAll)
rotas.get("/unidades/:id", new UnidadeController().readOne)
rotas.get("/unidades/:id", new UnidadeController().update)
rotas.get("/unidades/:id", new UnidadeController().delete)

export default rotas
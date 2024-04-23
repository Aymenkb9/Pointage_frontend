import { Escale } from "../escales-list/escale.model";

export interface Pointage {
    id: string;
    escales: Escale[]; // Supposons que vous ayez déjà défini l'interface Escale
}

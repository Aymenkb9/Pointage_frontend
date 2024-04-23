import { Navire } from '../model/navire.model';
import { Client } from '../model/client.model';
import { Connaissement } from '../model/connaissement.model';
import { Terminal } from '../model/terminal.model';
import { Pointage } from '../model/pointage.model';

export interface Escale {
    id: string;
    numEscale: number;
    numVoyage: string;
    pointage: Pointage; // Supposons que vous avez déjà défini le modèle Pointage
    navires: Navire[]; // Supposons que vous avez déjà défini le modèle Navire
    clients: Client[]; // Supposons que vous avez déjà défini le modèle Client
    connaissement: Connaissement; // Supposons que vous avez déjà défini le modèle Connaissement
    terminal: Terminal; // Supposons que vous avez déjà défini le modèle Terminal
}

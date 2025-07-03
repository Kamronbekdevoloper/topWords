import { v4 as uuidv4 } from "uuid";
import pdf1 from "./1000BasicEnglishWords1.pdf";
import pdf2 from "./IELTSVocab3.pdf";
import pdf3 from "./LizGrammarWorkBook.pdf";
import pdf4 from "./top100eng.pdf";
import pdf5 from "./top50grammistake.pdf";
import ruspdf1 from "./1000mostuse.pdf";
import ruspdf2 from "./learnrus.pdf";
import ruspdf3 from "./russian-word-list-verbs.pdf";
import ruspdf4 from "./slovar.pdf";
import ruspdf5 from "./top1000verbs.pdf";

export const files = [
  {
    id: uuidv4(),
    name: "1000 Basic English Words - Part 1",
    file: pdf1,
    type: "PDF",
  },
  {
    id: uuidv4(),
    name: "IELTS Vocabulary ",
    file: pdf2,
    type: "PDF",
  },
  {
    id: uuidv4(),
    name: "Liz Grammar Work Book",
    file: pdf3,
    type: "PDF",
  },
  {
    id: uuidv4(),
    name: "Top 100 Words",
    file: pdf4,
    type: "PDF",
  },
  {
    id: uuidv4(),
    name: "Top Grammaar Mistakes",
    file: pdf5,
    type: "PDF",
  },
];

export const rusfiles = [
  {
    id: uuidv4(),
    name: "1000 Basic Russian Words - Part 1",
    file: ruspdf5,
    type: "PDF",
  },
  {
    id: uuidv4(),
    name: "Most Used Russian Verbs ",
    file: ruspdf3,
    type: "PDF",
  },
  {
    id: uuidv4(),
    name: "Russian 'Slovar'",
    file: ruspdf4,
    type: "PDF",
  },
  {
    id: uuidv4(),
    name: "Top 1000 Words",
    file: ruspdf1,
    type: "PDF",
  },
  {
    id: uuidv4(),
    name: " Learn Rus",
    file: ruspdf2,
    type: "PDF",
  },
];

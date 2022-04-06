import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export interface IToDo {
  id: number;
  text: string;
}

interface IToDoState {
  [key: string]: IToDo[];
}

interface IDefaultState {
  mode: boolean;
  weather: boolean;
  theme: Object;
}
export const nameState = atom<string>({
  key: "name",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "To do": [],
    Doing: [],
    Done: [],
  },
  effects_UNSTABLE: [persistAtom],
});

export const defaultState = atom<IDefaultState>({
  key: "defaultSet",
  default: {
    mode: true,
    weather: true,
    theme: {},
  },
});
interface IUserInfo {
  monthToDo?: Object;
}

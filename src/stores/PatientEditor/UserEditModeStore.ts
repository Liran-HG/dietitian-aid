import { create } from "zustand"

// const { patient, formControl, edit } = useContext(PatientPageFormContext)
type State = {
    edit: boolean
    patient: any,
    form: any
}
type Actions = {
    setEditMode: (state: boolean) => void,
    setPatient: (state: any) => void,
    setForm: (state: any) => void
}
// export const useUserEditModeStore = create<State & Actions>()(set=>({
//     edit: false,
//     patient: {},
//     form: {},
//     setEditMode: (state: boolean) => set({ edit: state }),
//     setPatient: (state: any) => set({ patient: state }),
//     setForm: (state: any) => set({ form: state }),
// }))


export const useUserEditModeStore = (initProps?: Partial<State>) => {
    const DEFAULT_PROPS: State = {
      edit:false,
      patient:null,
      form:null
    }
    return create<State & Actions>()((set) => ({
      ...DEFAULT_PROPS,
      ...initProps,
           setEditMode: (state: boolean) => set({ edit: state }),
           setPatient: (state: any) => set({ patient: state }),
           setForm: (state: any) => set({ form: state }),
      
    }))
  }
  export type UserEditModeStore = ReturnType<typeof useUserEditModeStore>
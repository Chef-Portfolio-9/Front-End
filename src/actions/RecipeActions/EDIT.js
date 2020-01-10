export const EDIT = 'EDIT';

export const edit = id => {
    return { type: EDIT, payload: id }
    console.log(id, 'edit id')
}

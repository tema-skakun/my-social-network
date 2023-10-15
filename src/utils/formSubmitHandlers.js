export const onFormSubmit = (reset, pristine, onSubmit) => (formData) => {
    onSubmit(formData);
    if (!pristine) {
        reset();//clear form
    }
};

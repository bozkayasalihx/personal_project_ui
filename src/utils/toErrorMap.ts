export const toErrorMap = (errors: Array<Record<string, string>>) => {
    const err = {};

    errors.forEach(error => (err[error.field] = error.message));

    return err;
};

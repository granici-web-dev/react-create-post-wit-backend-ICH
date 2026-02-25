const formValidator = {
  title: {
    required: {
      value: true,
      message: 'Title is required!',
    },
    minLength: {
      value: 2,
      message: 'Title should consist of more then 2 characters.',
    },
    maxLength: {
      value: 26,
      message: 'Too many characters in the Title! It should be less then 26',
    },
  },

  text: {
    required: {
      value: true,
      message: 'Text content is required!',
    },
    minLength: {
      value: 10,
      message: 'Text content should consist of more then 10 characters.',
    },
    maxLength: {
      value: 300,
      message: 'Too many characters in the Text content! It should be less then 300',
    },
  },
};
export default formValidator;

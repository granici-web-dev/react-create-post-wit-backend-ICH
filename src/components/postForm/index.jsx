import Input from "../input";
import TextArea from "../textArea";
import Button from "../button";
import styles from './styles.module.css';
import Avatar from "../avatar";
import {useForm} from "react-hook-form";
import formValidator from '../../validator/formValidator'

function PostForm({ createPost, data }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { title, text } = formValidator;

  return (
    <div className={styles.form}>
      <h2 style={{ marginBottom: '2rem' }}>Write a post</h2>
      <form
        className={styles.formInner}
        onSubmit={handleSubmit(createPost)}>
        <div>
          <Avatar />
        </div>
        <div>
          <div className={styles.formWrapper}>
            <Input placeholder={'Title'} title={'Text content'} {...register('title', title)} />
            <TextArea placeholder={'Enter text'} {...register('message', text)} />
          </div>
          <div className={styles.formActions}>
            <Button
              title={'Publish'}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
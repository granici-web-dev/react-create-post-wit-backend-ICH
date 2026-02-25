import Input from "../input";
import TextArea from "../textArea";
import Button from "../button";
import styles from './styles.module.css';
import Avatar from "../avatar";
import {useForm} from "react-hook-form";
import formValidator from '../../validator/formValidator'

function PostForm({ createPost }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode: 'onChange'});

  const { title, text } = formValidator;

  return (
    <div className={styles.form}>
      <h2 style={{ marginBottom: '2rem' }}>Write a post</h2>
      <form className={styles.formInner} onSubmit={handleSubmit(createPost)}>
        <div>
          <Avatar />
        </div>
        <div>
          <div className={styles.formWrapper}>
            <Input placeholder={'Title'} title={'Text content'} name={'title'} {...register('title', title)} />
            {errors.title && <p>{errors.title.message}</p>}
            <TextArea placeholder={'Enter text'} name={'text'} {...register('text', text)} />
            {errors.text && <p>{errors.text.message}</p>}
          </div>
          <div className={styles.formActions}>
            <Button type={'submit'} title={'Publish'} className={styles.publishBtn} />
          </div>
        </div>
        
        
      </form>
    </div>
  );
}

export default PostForm;
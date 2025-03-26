import { useForm, useFieldArray, Controller, useWatch } from 'react-hook-form';

// import './styles.css'

let renderCount = 0;

export default function Sample() {
  const { register, control, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      test: [{ firstName: 'Bill', lastName: 'Luo' }],
    },
  });
  const { fields, append, prepend, remove, swap, move, insert, replace } =
    useFieldArray({
      control,
      name: 'test',
    });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => console.log('data', data);

  // if you want to control your fields with watch
  const watchResult = watch('test');
  console.log('watchResult >>>', watchResult);

  // The following is useWatch example
  console.log('useWatch >>>', useWatch({ name: 'test', control }));

  renderCount++;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Field Array </h1>
      <p>The following demo allow you to delete, append, prepend items</p>
      <span className="counter">Render Count: {renderCount}</span>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <input
                {...register(`test.${index}.firstName`, { required: true })}
              />

              <Controller
                render={({ field }) => <input {...field} />}
                name={`test.${index}.lastName`}
                control={control}
              />
              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <section>
        <button
          type="button"
          onClick={() => {
            append({ firstName: 'appendBill', lastName: 'appendLuo' });
          }}
        >
          append
        </button>
        <button
          type="button"
          onClick={() =>
            prepend({
              firstName: 'prependFirstName',
              lastName: 'prependLastName',
            })
          }
        >
          prepend
        </button>
        <button
          type="button"
          onClick={() =>
            insert(2, {
              firstName: 'insertFirstName',
              lastName: 'insertLastName',
            })
          }
        >
          insert at
        </button>

        <button type="button" onClick={() => swap(1, 2)}>
          swap
        </button>

        <button type="button" onClick={() => move(1, 2)}>
          move
        </button>

        <button
          type="button"
          onClick={() =>
            replace([
              {
                firstName: 'test1',
                lastName: 'test1',
              },
              {
                firstName: 'test2',
                lastName: 'test2',
              },
            ])
          }
        >
          replace
        </button>

        <button type="button" onClick={() => remove(1)}>
          remove at
        </button>

        <button
          type="button"
          onClick={() =>
            reset({
              test: [{ firstName: 'Bill', lastName: 'Luo' }],
            })
          }
        >
          reset
        </button>
      </section>

      <input type="submit" />
    </form>
  );
}

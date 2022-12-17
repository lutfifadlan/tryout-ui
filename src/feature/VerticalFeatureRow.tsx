import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-3',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 text-center sm:px-1">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        <div className="mt-6 text-xl">{props.description}</div>
      </div>

      {props.reverse ? (
        <div className="w-full sm:w-1/3 p-6 mr-20">
          <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
        </div>
      ) : (
        <div className="w-full sm:w-1/3 p-6 ml-20">
          <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
        </div>
      )}
    </div>
  );
};

export { VerticalFeatureRow };

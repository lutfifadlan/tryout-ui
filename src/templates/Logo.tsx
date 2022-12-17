import { useRouter } from 'next/router';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';
  const router = useRouter();

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <img
        className="text-primary-500 stroke-current mr-1"
        width={size}
        height={size}
        src={`${router.basePath}/assets/images/tryout-logo-only.svg`}
        alt="tryout-logo"
      />

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };

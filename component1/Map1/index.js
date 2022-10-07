import dynamic from "next/dynamic";

const Map1 = dynamic(() => import('./Map1'), {
    ssr: false
});

export default Map1;
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../App.css'

export default function GoTop() {
  const {routePath} = useLocation();
  const onTop = () => {
    window.scrollTo(0,0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);

  return null;
}

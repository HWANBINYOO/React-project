import { KindContent, Sidebar } from "../../component";
import * as S from "./Styled";

export default function KindPage() {
  return (
    <S.Positioner>
      <Sidebar />
      <KindContent />
    </S.Positioner>
  );
}

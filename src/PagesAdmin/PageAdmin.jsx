import AltaProducts from '../ComponentAdmin/AltaProductos.jsx';
import ListaProducts from '../ComponentAdmin/ListaProductos.jsx'
import Especific from '../ComponentAdmin/AltaEspecificaciones.jsx';
import {Image} from '../ComponentAdmin/Altaimagen.jsx';




const PageAdmin= ()=>(
<>
<div>
<AltaProducts/>
</div>
<div>
<Especific/>
</div>
<div>
<Image/>
</div>
<div>
<ListaProducts/>
</div>
</>
)

export default PageAdmin
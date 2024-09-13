# e-Commerce Gapsi 🛒

# Demo 🚀

### https://gapsi-shop.vercel.app/

## Descripción

e-Commerce Gapsi es una aplicación de comercio electrónico desarrollada en React. Utiliza Material UI para los componentes de interfaz y Vite como bundler. La aplicación permite a los usuarios buscar productos y añadirlos a un carrito de compras.

### Arquitectura "Feature-First"

Se organiza en torno a las features o funcionalidades de la aplicación (e.g., ProductList, Cart, Header), donde cada funcionalidad tiene sus propios componentes y lógica relacionada agrupada en un único lugar.

### Resumen de la Arquitectura

- **Modular**: Cada componente o funcionalidad está encapsulada en su propio módulo (carpeta).
- **Feature-driven**: Las carpetas y archivos están organizados por características o módulos.
- **Reutilización**: Hooks, componentes y funciones auxiliares son altamente reutilizables.
- **Escalable**: Al seguir este patrón, es fácil añadir nuevas características o expandir la aplicación sin afectar la estructura existente.

## Tecnologías Utilizadas

- **React**: ^18.3.1
- **Material UI**: Para la interfaz de usuario.
- **Vite**: Para el bundling y la configuración del proyecto.

## Instalación y Configuración

1. **Clonar el repositorio**:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_DIRECTORIO>
   ```

2. **Instalar las dependencias**:

   ```bash
   npm install
   ```

3. **Configurar las variables de entorno:**:

- Crea un archivo .env en la raíz del proyecto.
- Agrega tu API key en el archivo .env:

  ```bash
     VITE_API_KEY=tu_api_key_aqui
  ```

4. **Iniciar el servidor de desarrollo::**:

   ```bash
     npm run dev
   ```

## Autor

Luis Fernando Fernández Cruz  
luis.fernan.fz@gmail.com

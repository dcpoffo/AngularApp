using AngularApp.Entidades;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsuariosController : ControllerBase
    {
        private readonly IList<Usuario> _usuarios;

        public UsuariosController()
        {            
            _usuarios = new List<Usuario>
            {
                new Usuario {Nome = "Darlan", Sobrenome = "Poffo", Email = "dcpoffo@gmail.com"},
                new Usuario {Nome = "Vanessa", Sobrenome = "Tanaka", Email = "vaneyt@gmail.com"},
                new Usuario {Nome = "Nicolas", Sobrenome = "Tanaka Poffo", Email = "nicolas@gmail.com"}
             };
       
        }

        [HttpGet]
        [Route("get_usuarios")]
        public IActionResult Get()
        {
            return Ok(_usuarios);
        }

        [HttpPost]
        [Route("post_usuarios")]
        public IActionResult Post([FromBody] Usuario usuario)
        {
            _usuarios.Add(usuario);
            return Ok();
        }

        //[HttpPut]
        //[Route("put_usuarios")]
        //public IActionResult Put([FromBody] Usuario usuario)
        //{
        //    var usuarioCadastrado = _usuarios.FirstOrDefault(u => u.Nome == usuario.Nome && u.Sobrenome == usuario.Sobrenome);

        //    if (usuarioCadastrado is null)
        //    {
        //        return Ok("Usuário não encontrado");
        //    }

        //    return Ok();
        //}

        //[HttpDelete]
        //[Route("delete_usuarios/{nome}")]
        //public IActionResult Delete([FromRoute] string nome)
        //{
        //    _usuarios.Remove(_usuarios.FirstOrDefault(u => u.Nome == nome));
        //    return Ok();
        //}
    }
}

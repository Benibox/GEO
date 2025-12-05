// Cloudflare Pages middleware - pas nécessaire mais évite les erreurs
export async function onRequest(context) {
  return context.next();
}

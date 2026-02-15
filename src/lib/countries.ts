// Country data with ISO code and names in 6 languages
// Used for both form display and Google Sheets storage
export type CountryCode = string
export type Language = 'it' | 'en' | 'es' | 'fr' | 'de' | 'ru'

export interface Country {
  code: string
  nameIt: string   // Italian
  nameEn: string   // English
  nameEs: string   // Spanish
  nameFr: string   // French
  nameDe: string   // German
  nameRu: string   // Russian
}

// Complete list of all 195 UN recognized countries
export const countries: Country[] = [
  { code: 'AF', nameIt: 'Afghanistan', nameEn: 'Afghanistan', nameEs: 'Afganistán', nameFr: 'Afghanistan', nameDe: 'Afghanistan', nameRu: 'Афганистан' },
  { code: 'AL', nameIt: 'Albania', nameEn: 'Albania', nameEs: 'Albania', nameFr: 'Albanie', nameDe: 'Albanien', nameRu: 'Албания' },
  { code: 'DZ', nameIt: 'Algeria', nameEn: 'Algeria', nameEs: 'Argelia', nameFr: 'Algérie', nameDe: 'Algerien', nameRu: 'Алжир' },
  { code: 'AD', nameIt: 'Andorra', nameEn: 'Andorra', nameEs: 'Andorra', nameFr: 'Andorre', nameDe: 'Andorra', nameRu: 'Андорра' },
  { code: 'AO', nameIt: 'Angola', nameEn: 'Angola', nameEs: 'Angola', nameFr: 'Angola', nameDe: 'Angola', nameRu: 'Ангола' },
  { code: 'AG', nameIt: 'Antigua e Barbuda', nameEn: 'Antigua and Barbuda', nameEs: 'Antigua y Barbuda', nameFr: 'Antigua-et-Barbuda', nameDe: 'Antigua und Barbuda', nameRu: 'Антигуа и Барбуда' },
  { code: 'AR', nameIt: 'Argentina', nameEn: 'Argentina', nameEs: 'Argentina', nameFr: 'Argentine', nameDe: 'Argentinien', nameRu: 'Аргентина' },
  { code: 'AM', nameIt: 'Armenia', nameEn: 'Armenia', nameEs: 'Armenia', nameFr: 'Arménie', nameDe: 'Armenien', nameRu: 'Армения' },
  { code: 'AU', nameIt: 'Australia', nameEn: 'Australia', nameEs: 'Australia', nameFr: 'Australie', nameDe: 'Australien', nameRu: 'Австралия' },
  { code: 'AT', nameIt: 'Austria', nameEn: 'Austria', nameEs: 'Austria', nameFr: 'Autriche', nameDe: 'Österreich', nameRu: 'Австрия' },
  { code: 'AZ', nameIt: 'Azerbaijan', nameEn: 'Azerbaijan', nameEs: 'Azerbaiyán', nameFr: 'Azerbaïdjan', nameDe: 'Aserbaidschan', nameRu: 'Азербайджан' },
  { code: 'BS', nameIt: 'Bahamas', nameEn: 'Bahamas', nameEs: 'Bahamas', nameFr: 'Bahamas', nameDe: 'Bahamas', nameRu: 'Багамские Острова' },
  { code: 'BH', nameIt: 'Bahrain', nameEn: 'Bahrain', nameEs: 'Baréin', nameFr: 'Bahreïn', nameDe: 'Bahrain', nameRu: 'Бахрейн' },
  { code: 'BD', nameIt: 'Bangladesh', nameEn: 'Bangladesh', nameEs: 'Bangladés', nameFr: 'Bangladesh', nameDe: 'Bangladesch', nameRu: 'Бангладеш' },
  { code: 'BB', nameIt: 'Barbados', nameEn: 'Barbados', nameEs: 'Barbados', nameFr: 'Barbade', nameDe: 'Barbados', nameRu: 'Барбадос' },
  { code: 'BY', nameIt: 'Bielorussia', nameEn: 'Belarus', nameEs: 'Bielorrusia', nameFr: 'Biélorussie', nameDe: 'Belarus', nameRu: 'Беларусь' },
  { code: 'BE', nameIt: 'Belgio', nameEn: 'Belgium', nameEs: 'Bélgica', nameFr: 'Belgique', nameDe: 'Belgien', nameRu: 'Бельгия' },
  { code: 'BZ', nameIt: 'Belize', nameEn: 'Belize', nameEs: 'Belice', nameFr: 'Belize', nameDe: 'Belize', nameRu: 'Белиз' },
  { code: 'BJ', nameIt: 'Benin', nameEn: 'Benin', nameEs: 'Benín', nameFr: 'Bénin', nameDe: 'Benin', nameRu: 'Бенин' },
  { code: 'BT', nameIt: 'Bhutan', nameEn: 'Bhutan', nameEs: 'Bután', nameFr: 'Bhoutan', nameDe: 'Bhutan', nameRu: 'Бутан' },
  { code: 'BO', nameIt: 'Bolivia', nameEn: 'Bolivia', nameEs: 'Bolivia', nameFr: 'Bolivie', nameDe: 'Bolivien', nameRu: 'Боливия' },
  { code: 'BA', nameIt: 'Bosnia ed Erzegovina', nameEn: 'Bosnia and Herzegovina', nameEs: 'Bosnia y Herzegovina', nameFr: 'Bosnie-Herzégovine', nameDe: 'Bosnien und Herzegowina', nameRu: 'Босния и Герцеговина' },
  { code: 'BW', nameIt: 'Botswana', nameEn: 'Botswana', nameEs: 'Botsuana', nameFr: 'Botswana', nameDe: 'Botsuana', nameRu: 'Ботсвана' },
  { code: 'BR', nameIt: 'Brasile', nameEn: 'Brazil', nameEs: 'Brasil', nameFr: 'Brésil', nameDe: 'Brasilien', nameRu: 'Бразилия' },
  { code: 'BN', nameIt: 'Brunei', nameEn: 'Brunei', nameEs: 'Brunéi', nameFr: 'Brunei', nameDe: 'Brunei', nameRu: 'Бруней' },
  { code: 'BG', nameIt: 'Bulgaria', nameEn: 'Bulgaria', nameEs: 'Bulgaria', nameFr: 'Bulgarie', nameDe: 'Bulgarien', nameRu: 'Болгария' },
  { code: 'BF', nameIt: 'Burkina Faso', nameEn: 'Burkina Faso', nameEs: 'Burkina Faso', nameFr: 'Burkina Faso', nameDe: 'Burkina Faso', nameRu: 'Буркина-Фасо' },
  { code: 'BI', nameIt: 'Burundi', nameEn: 'Burundi', nameEs: 'Burundi', nameFr: 'Burundi', nameDe: 'Burundi', nameRu: 'Бурунди' },
  { code: 'KH', nameIt: 'Cambogia', nameEn: 'Cambodia', nameEs: 'Camboya', nameFr: 'Cambodge', nameDe: 'Kambodscha', nameRu: 'Камбоджа' },
  { code: 'CM', nameIt: 'Camerun', nameEn: 'Cameroon', nameEs: 'Camerún', nameFr: 'Cameroun', nameDe: 'Kamerun', nameRu: 'Камерун' },
  { code: 'CA', nameIt: 'Canada', nameEn: 'Canada', nameEs: 'Canadá', nameFr: 'Canada', nameDe: 'Kanada', nameRu: 'Канада' },
  { code: 'CV', nameIt: 'Capo Verde', nameEn: 'Cape Verde', nameEs: 'Cabo Verde', nameFr: 'Cap-Vert', nameDe: 'Kap Verde', nameRu: 'Кабо-Верде' },
  { code: 'CF', nameIt: 'Repubblica Centrafricana', nameEn: 'Central African Republic', nameEs: 'República Centroafricana', nameFr: 'République centrafricaine', nameDe: 'Zentralafrikanische Republik', nameRu: 'Центральноафриканская Республика' },
  { code: 'TD', nameIt: 'Ciad', nameEn: 'Chad', nameEs: 'Chad', nameFr: 'Tchad', nameDe: 'Tschad', nameRu: 'Чад' },
  { code: 'CL', nameIt: 'Cile', nameEn: 'Chile', nameEs: 'Chile', nameFr: 'Chili', nameDe: 'Chile', nameRu: 'Чили' },
  { code: 'CN', nameIt: 'Cina', nameEn: 'China', nameEs: 'China', nameFr: 'Chine', nameDe: 'China', nameRu: 'Китай' },
  { code: 'CO', nameIt: 'Colombia', nameEn: 'Colombia', nameEs: 'Colombia', nameFr: 'Colombie', nameDe: 'Kolumbien', nameRu: 'Колумбия' },
  { code: 'KM', nameIt: 'Comore', nameEn: 'Comoros', nameEs: 'Comoras', nameFr: 'Comores', nameDe: 'Komoren', nameRu: 'Коморы' },
  { code: 'CG', nameIt: 'Congo', nameEn: 'Congo', nameEs: 'Congo', nameFr: 'Congo', nameDe: 'Kongo', nameRu: 'Конго' },
  { code: 'CD', nameIt: 'Repubblica Democratica del Congo', nameEn: 'Democratic Republic of the Congo', nameEs: 'República Democrática del Congo', nameFr: 'République démocratique du Congo', nameDe: 'Demokratische Republik Kongo', nameRu: 'Демократическая Республика Конго' },
  { code: 'CR', nameIt: 'Costa Rica', nameEn: 'Costa Rica', nameEs: 'Costa Rica', nameFr: 'Costa Rica', nameDe: 'Costa Rica', nameRu: 'Коста-Рика' },
  { code: 'CI', nameIt: "Costa d'Avorio", nameEn: "Ivory Coast", nameEs: 'Costa de Marfil', nameFr: "Côte d'Ivoire", nameDe: 'Elfenbeinküste', nameRu: 'Кот-д\'Ивуар' },
  { code: 'HR', nameIt: 'Croazia', nameEn: 'Croatia', nameEs: 'Croacia', nameFr: 'Croatie', nameDe: 'Kroatien', nameRu: 'Хорватия' },
  { code: 'CU', nameIt: 'Cuba', nameEn: 'Cuba', nameEs: 'Cuba', nameFr: 'Cuba', nameDe: 'Kuba', nameRu: 'Куба' },
  { code: 'CY', nameIt: 'Cipro', nameEn: 'Cyprus', nameEs: 'Chipre', nameFr: 'Chypre', nameDe: 'Zypern', nameRu: 'Кипр' },
  { code: 'CZ', nameIt: 'Repubblica Ceca', nameEn: 'Czech Republic', nameEs: 'República Checa', nameFr: 'République tchèque', nameDe: 'Tschechien', nameRu: 'Чехия' },
  { code: 'DK', nameIt: 'Danimarca', nameEn: 'Denmark', nameEs: 'Dinamarca', nameFr: 'Danemark', nameDe: 'Dänemark', nameRu: 'Дания' },
  { code: 'DJ', nameIt: 'Gibuti', nameEn: 'Djibouti', nameEs: 'Yibuti', nameFr: 'Djibouti', nameDe: 'Dschibuti', nameRu: 'Джибути' },
  { code: 'DM', nameIt: 'Dominica', nameEn: 'Dominica', nameEs: 'Dominica', nameFr: 'Dominique', nameDe: 'Dominica', nameRu: 'Доминика' },
  { code: 'DO', nameIt: 'Repubblica Dominicana', nameEn: 'Dominican Republic', nameEs: 'República Dominicana', nameFr: 'République dominicaine', nameDe: 'Dominikanische Republik', nameRu: 'Доминиканская Республика' },
  { code: 'EC', nameIt: 'Ecuador', nameEn: 'Ecuador', nameEs: 'Ecuador', nameFr: 'Équateur', nameDe: 'Ecuador', nameRu: 'Эквадор' },
  { code: 'EG', nameIt: 'Egitto', nameEn: 'Egypt', nameEs: 'Egipto', nameFr: 'Égypte', nameDe: 'Ägypten', nameRu: 'Египет' },
  { code: 'SV', nameIt: 'El Salvador', nameEn: 'El Salvador', nameEs: 'El Salvador', nameFr: 'Salvador', nameDe: 'El Salvador', nameRu: 'Сальвадор' },
  { code: 'GQ', nameIt: 'Guinea Equatoriale', nameEn: 'Equatorial Guinea', nameEs: 'Guinea Ecuatorial', nameFr: 'Guinée équatoriale', nameDe: 'Äquatorialguinea', nameRu: 'Экваториальная Гвинея' },
  { code: 'ER', nameIt: 'Eritrea', nameEn: 'Eritrea', nameEs: 'Eritrea', nameFr: 'Érythrée', nameDe: 'Eritrea', nameRu: 'Эритрея' },
  { code: 'EE', nameIt: 'Estonia', nameEn: 'Estonia', nameEs: 'Estonia', nameFr: 'Estonie', nameDe: 'Estland', nameRu: 'Эстония' },
  { code: 'SZ', nameIt: 'Eswatini', nameEn: 'Eswatini', nameEs: 'Esuatini', nameFr: 'Eswatini', nameDe: 'Eswatini', nameRu: 'Эсватини' },
  { code: 'ET', nameIt: 'Etiopia', nameEn: 'Ethiopia', nameEs: 'Etiopía', nameFr: 'Éthiopie', nameDe: 'Äthiopien', nameRu: 'Эфиопия' },
  { code: 'FJ', nameIt: 'Figi', nameEn: 'Fiji', nameEs: 'Fiyi', nameFr: 'Fidji', nameDe: 'Fidschi', nameRu: 'Фиджи' },
  { code: 'FI', nameIt: 'Finlandia', nameEn: 'Finland', nameEs: 'Finlandia', nameFr: 'Finlande', nameDe: 'Finnland', nameRu: 'Финляндия' },
  { code: 'FR', nameIt: 'Francia', nameEn: 'France', nameEs: 'Francia', nameFr: 'France', nameDe: 'Frankreich', nameRu: 'Франция' },
  { code: 'GA', nameIt: 'Gabon', nameEn: 'Gabon', nameEs: 'Gabón', nameFr: 'Gabon', nameDe: 'Gabun', nameRu: 'Габон' },
  { code: 'GM', nameIt: 'Gambia', nameEn: 'Gambia', nameEs: 'Gambia', nameFr: 'Gambie', nameDe: 'Gambia', nameRu: 'Гамбия' },
  { code: 'GE', nameIt: 'Georgia', nameEn: 'Georgia', nameEs: 'Georgia', nameFr: 'Géorgie', nameDe: 'Georgien', nameRu: 'Грузия' },
  { code: 'DE', nameIt: 'Germania', nameEn: 'Germany', nameEs: 'Alemania', nameFr: 'Allemagne', nameDe: 'Deutschland', nameRu: 'Германия' },
  { code: 'GH', nameIt: 'Ghana', nameEn: 'Ghana', nameEs: 'Ghana', nameFr: 'Ghana', nameDe: 'Ghana', nameRu: 'Гана' },
  { code: 'GR', nameIt: 'Grecia', nameEn: 'Greece', nameEs: 'Grecia', nameFr: 'Grèce', nameDe: 'Griechenland', nameRu: 'Греция' },
  { code: 'GD', nameIt: 'Grenada', nameEn: 'Grenada', nameEs: 'Granada', nameFr: 'Grenade', nameDe: 'Grenada', nameRu: 'Гренада' },
  { code: 'GT', nameIt: 'Guatemala', nameEn: 'Guatemala', nameEs: 'Guatemala', nameFr: 'Guatemala', nameDe: 'Guatemala', nameRu: 'Гватемала' },
  { code: 'GN', nameIt: 'Guinea', nameEn: 'Guinea', nameEs: 'Guinea', nameFr: 'Guinée', nameDe: 'Guinea', nameRu: 'Гвинея' },
  { code: 'GW', nameIt: 'Guinea-Bissau', nameEn: 'Guinea-Bissau', nameEs: 'Guinea-Bisáu', nameFr: 'Guinée-Bissau', nameDe: 'Guinea-Bissau', nameRu: 'Гвинея-Бисау' },
  { code: 'GY', nameIt: 'Guyana', nameEn: 'Guyana', nameEs: 'Guyana', nameFr: 'Guyana', nameDe: 'Guyana', nameRu: 'Гайана' },
  { code: 'HT', nameIt: 'Haiti', nameEn: 'Haiti', nameEs: 'Haití', nameFr: 'Haïti', nameDe: 'Haiti', nameRu: 'Гаити' },
  { code: 'HN', nameIt: 'Honduras', nameEn: 'Honduras', nameEs: 'Honduras', nameFr: 'Honduras', nameDe: 'Honduras', nameRu: 'Гондурас' },
  { code: 'HU', nameIt: 'Ungheria', nameEn: 'Hungary', nameEs: 'Hungría', nameFr: 'Hongrie', nameDe: 'Ungarn', nameRu: 'Венгрия' },
  { code: 'IS', nameIt: 'Islanda', nameEn: 'Iceland', nameEs: 'Islandia', nameFr: 'Islande', nameDe: 'Island', nameRu: 'Исландия' },
  { code: 'IN', nameIt: 'India', nameEn: 'India', nameEs: 'India', nameFr: 'Inde', nameDe: 'Indien', nameRu: 'Индия' },
  { code: 'ID', nameIt: 'Indonesia', nameEn: 'Indonesia', nameEs: 'Indonesia', nameFr: 'Indonésie', nameDe: 'Indonesien', nameRu: 'Индонезия' },
  { code: 'IR', nameIt: 'Iran', nameEn: 'Iran', nameEs: 'Irán', nameFr: 'Iran', nameDe: 'Iran', nameRu: 'Иран' },
  { code: 'IQ', nameIt: 'Iraq', nameEn: 'Iraq', nameEs: 'Irak', nameFr: 'Irak', nameDe: 'Irak', nameRu: 'Ирак' },
  { code: 'IE', nameIt: 'Irlanda', nameEn: 'Ireland', nameEs: 'Irlanda', nameFr: 'Irlande', nameDe: 'Irland', nameRu: 'Ирландия' },
  { code: 'IL', nameIt: 'Israele', nameEn: 'Israel', nameEs: 'Israel', nameFr: 'Israël', nameDe: 'Israel', nameRu: 'Израиль' },
  { code: 'IT', nameIt: 'Italia', nameEn: 'Italy', nameEs: 'Italia', nameFr: 'Italie', nameDe: 'Italien', nameRu: 'Италия' },
  { code: 'JM', nameIt: 'Giamaica', nameEn: 'Jamaica', nameEs: 'Jamaica', nameFr: 'Jamaïque', nameDe: 'Jamaika', nameRu: 'Ямайка' },
  { code: 'JP', nameIt: 'Giappone', nameEn: 'Japan', nameEs: 'Japón', nameFr: 'Japon', nameDe: 'Japan', nameRu: 'Япония' },
  { code: 'JO', nameIt: 'Giordania', nameEn: 'Jordan', nameEs: 'Jordania', nameFr: 'Jordanie', nameDe: 'Jordanien', nameRu: 'Иордания' },
  { code: 'KZ', nameIt: 'Kazakistan', nameEn: 'Kazakhstan', nameEs: 'Kazajistán', nameFr: 'Kazakhstan', nameDe: 'Kasachstan', nameRu: 'Казахстан' },
  { code: 'KE', nameIt: 'Kenya', nameEn: 'Kenya', nameEs: 'Kenia', nameFr: 'Kenya', nameDe: 'Kenia', nameRu: 'Кения' },
  { code: 'KI', nameIt: 'Kiribati', nameEn: 'Kiribati', nameEs: 'Kiribati', nameFr: 'Kiribati', nameDe: 'Kiribati', nameRu: 'Кирибати' },
  { code: 'KW', nameIt: 'Kuwait', nameEn: 'Kuwait', nameEs: 'Kuwait', nameFr: 'Koweït', nameDe: 'Kuwait', nameRu: 'Кувейт' },
  { code: 'KG', nameIt: 'Kirghizistan', nameEn: 'Kyrgyzstan', nameEs: 'Kirguistán', nameFr: 'Kirghizistan', nameDe: 'Kirgisistan', nameRu: 'Кыргызстан' },
  { code: 'LA', nameIt: 'Laos', nameEn: 'Laos', nameEs: 'Laos', nameFr: 'Laos', nameDe: 'Laos', nameRu: 'Лаос' },
  { code: 'LV', nameIt: 'Lettonia', nameEn: 'Latvia', nameEs: 'Letonia', nameFr: 'Lettonie', nameDe: 'Lettland', nameRu: 'Латвия' },
  { code: 'LB', nameIt: 'Libano', nameEn: 'Lebanon', nameEs: 'Líbano', nameFr: 'Liban', nameDe: 'Libanon', nameRu: 'Ливан' },
  { code: 'LS', nameIt: 'Lesotho', nameEn: 'Lesotho', nameEs: 'Lesoto', nameFr: 'Lesotho', nameDe: 'Lesotho', nameRu: 'Лесото' },
  { code: 'LR', nameIt: 'Liberia', nameEn: 'Liberia', nameEs: 'Liberia', nameFr: 'Liberia', nameDe: 'Liberia', nameRu: 'Либерия' },
  { code: 'LY', nameIt: 'Libia', nameEn: 'Libya', nameEs: 'Libia', nameFr: 'Libye', nameDe: 'Libyen', nameRu: 'Ливия' },
  { code: 'LI', nameIt: 'Liechtenstein', nameEn: 'Liechtenstein', nameEs: 'Liechtenstein', nameFr: 'Liechtenstein', nameDe: 'Liechtenstein', nameRu: 'Лихтенштейн' },
  { code: 'LT', nameIt: 'Lituania', nameEn: 'Lithuania', nameEs: 'Lituania', nameFr: 'Lituanie', nameDe: 'Litauen', nameRu: 'Литва' },
  { code: 'LU', nameIt: 'Lussemburgo', nameEn: 'Luxembourg', nameEs: 'Luxemburgo', nameFr: 'Luxembourg', nameDe: 'Luxemburg', nameRu: 'Люксембург' },
  { code: 'MG', nameIt: 'Madagascar', nameEn: 'Madagascar', nameEs: 'Madagascar', nameFr: 'Madagascar', nameDe: 'Madagaskar', nameRu: 'Мадагаскар' },
  { code: 'MW', nameIt: 'Malawi', nameEn: 'Malawi', nameEs: 'Malaui', nameFr: 'Malawi', nameDe: 'Malawi', nameRu: 'Малави' },
  { code: 'MY', nameIt: 'Malaysia', nameEn: 'Malaysia', nameEs: 'Malasia', nameFr: 'Malaisie', nameDe: 'Malaysia', nameRu: 'Малайзия' },
  { code: 'MV', nameIt: 'Maldive', nameEn: 'Maldives', nameEs: 'Maldivas', nameFr: 'Maldives', nameDe: 'Malediven', nameRu: 'Мальдивы' },
  { code: 'ML', nameIt: 'Mali', nameEn: 'Mali', nameEs: 'Malí', nameFr: 'Mali', nameDe: 'Mali', nameRu: 'Мали' },
  { code: 'MT', nameIt: 'Malta', nameEn: 'Malta', nameEs: 'Malta', nameFr: 'Malte', nameDe: 'Malta', nameRu: 'Мальта' },
  { code: 'MH', nameIt: 'Isole Marshall', nameEn: 'Marshall Islands', nameEs: 'Islas Marshall', nameFr: 'Îles Marshall', nameDe: 'Marshallinseln', nameRu: 'Маршалловы Острова' },
  { code: 'MR', nameIt: 'Mauritania', nameEn: 'Mauritania', nameEs: 'Mauritania', nameFr: 'Mauritanie', nameDe: 'Mauretanien', nameRu: 'Мавритания' },
  { code: 'MU', nameIt: 'Mauritius', nameEn: 'Mauritius', nameEs: 'Mauricio', nameFr: 'Maurice', nameDe: 'Mauritius', nameRu: 'Маврикий' },
  { code: 'MX', nameIt: 'Messico', nameEn: 'Mexico', nameEs: 'México', nameFr: 'Mexique', nameDe: 'Mexiko', nameRu: 'Мексика' },
  { code: 'FM', nameIt: 'Micronesia', nameEn: 'Micronesia', nameEs: 'Micronesia', nameFr: 'Micronésie', nameDe: 'Mikronesien', nameRu: 'Микронезия' },
  { code: 'MD', nameIt: 'Moldavia', nameEn: 'Moldova', nameEs: 'Moldavia', nameFr: 'Moldavie', nameDe: 'Moldau', nameRu: 'Молдова' },
  { code: 'MC', nameIt: 'Monaco', nameEn: 'Monaco', nameEs: 'Mónaco', nameFr: 'Monaco', nameDe: 'Monaco', nameRu: 'Монако' },
  { code: 'MN', nameIt: 'Mongolia', nameEn: 'Mongolia', nameEs: 'Mongolia', nameFr: 'Mongolie', nameDe: 'Mongolei', nameRu: 'Монголия' },
  { code: 'ME', nameIt: 'Montenegro', nameEn: 'Montenegro', nameEs: 'Montenegro', nameFr: 'Monténégro', nameDe: 'Montenegro', nameRu: 'Черногория' },
  { code: 'MA', nameIt: 'Marocco', nameEn: 'Morocco', nameEs: 'Marruecos', nameFr: 'Maroc', nameDe: 'Marokko', nameRu: 'Марокко' },
  { code: 'MZ', nameIt: 'Mozambico', nameEn: 'Mozambique', nameEs: 'Mozambique', nameFr: 'Mozambique', nameDe: 'Mosambik', nameRu: 'Мозамбик' },
  { code: 'MM', nameIt: 'Myanmar', nameEn: 'Myanmar', nameEs: 'Birmania', nameFr: 'Birmanie', nameDe: 'Myanmar', nameRu: 'Мьянма' },
  { code: 'NA', nameIt: 'Namibia', nameEn: 'Namibia', nameEs: 'Namibia', nameFr: 'Namibie', nameDe: 'Namibia', nameRu: 'Намибия' },
  { code: 'NR', nameIt: 'Nauru', nameEn: 'Nauru', nameEs: 'Nauru', nameFr: 'Nauru', nameDe: 'Nauru', nameRu: 'Науру' },
  { code: 'NP', nameIt: 'Nepal', nameEn: 'Nepal', nameEs: 'Nepal', nameFr: 'Népal', nameDe: 'Nepal', nameRu: 'Непал' },
  { code: 'NL', nameIt: 'Paesi Bassi', nameEn: 'Netherlands', nameEs: 'Países Bajos', nameFr: 'Pays-Bas', nameDe: 'Niederlande', nameRu: 'Нидерланды' },
  { code: 'NZ', nameIt: 'Nuova Zelanda', nameEn: 'New Zealand', nameEs: 'Nueva Zelanda', nameFr: 'Nouvelle-Zélande', nameDe: 'Neuseeland', nameRu: 'Новая Зеландия' },
  { code: 'NI', nameIt: 'Nicaragua', nameEn: 'Nicaragua', nameEs: 'Nicaragua', nameFr: 'Nicaragua', nameDe: 'Nicaragua', nameRu: 'Никарагуа' },
  { code: 'NE', nameIt: 'Niger', nameEn: 'Niger', nameEs: 'Níger', nameFr: 'Niger', nameDe: 'Niger', nameRu: 'Нигер' },
  { code: 'NG', nameIt: 'Nigeria', nameEn: 'Nigeria', nameEs: 'Nigeria', nameFr: 'Nigeria', nameDe: 'Nigeria', nameRu: 'Нигерия' },
  { code: 'KP', nameIt: 'Corea del Nord', nameEn: 'North Korea', nameEs: 'Corea del Norte', nameFr: 'Corée du Nord', nameDe: 'Nordkorea', nameRu: 'КНДР' },
  { code: 'MK', nameIt: 'Macedonia del Nord', nameEn: 'North Macedonia', nameEs: 'Macedonia del Norte', nameFr: 'Macédoine du Nord', nameDe: 'Nordmazedonien', nameRu: 'Северная Македония' },
  { code: 'NO', nameIt: 'Norvegia', nameEn: 'Norway', nameEs: 'Noruega', nameFr: 'Norvège', nameDe: 'Norwegen', nameRu: 'Норвегия' },
  { code: 'OM', nameIt: 'Oman', nameEn: 'Oman', nameEs: 'Omán', nameFr: 'Oman', nameDe: 'Oman', nameRu: 'Оман' },
  { code: 'PK', nameIt: 'Pakistan', nameEn: 'Pakistan', nameEs: 'Pakistán', nameFr: 'Pakistan', nameDe: 'Pakistan', nameRu: 'Пакистан' },
  { code: 'PW', nameIt: 'Palau', nameEn: 'Palau', nameEs: 'Palaos', nameFr: 'Palaos', nameDe: 'Palau', nameRu: 'Палау' },
  { code: 'PS', nameIt: 'Palestina', nameEn: 'Palestine', nameEs: 'Palestina', nameFr: 'Palestine', nameDe: 'Palästina', nameRu: 'Палестина' },
  { code: 'PA', nameIt: 'Panama', nameEn: 'Panama', nameEs: 'Panamá', nameFr: 'Panama', nameDe: 'Panama', nameRu: 'Панама' },
  { code: 'PG', nameIt: 'Papua Nuova Guinea', nameEn: 'Papua New Guinea', nameEs: 'Papúa Nueva Guinea', nameFr: 'Papouasie-Nouvelle-Guinée', nameDe: 'Papua-Neuguinea', nameRu: 'Папуа — Новая Гвинея' },
  { code: 'PY', nameIt: 'Paraguay', nameEn: 'Paraguay', nameEs: 'Paraguay', nameFr: 'Paraguay', nameDe: 'Paraguay', nameRu: 'Парагвай' },
  { code: 'PE', nameIt: 'Perù', nameEn: 'Peru', nameEs: 'Perú', nameFr: 'Pérou', nameDe: 'Peru', nameRu: 'Перу' },
  { code: 'PH', nameIt: 'Filippine', nameEn: 'Philippines', nameEs: 'Filipinas', nameFr: 'Philippines', nameDe: 'Philippinen', nameRu: 'Филиппины' },
  { code: 'PL', nameIt: 'Polonia', nameEn: 'Poland', nameEs: 'Polonia', nameFr: 'Pologne', nameDe: 'Polen', nameRu: 'Польша' },
  { code: 'PT', nameIt: 'Portogallo', nameEn: 'Portugal', nameEs: 'Portugal', nameFr: 'Portugal', nameDe: 'Portugal', nameRu: 'Португалия' },
  { code: 'QA', nameIt: 'Qatar', nameEn: 'Qatar', nameEs: 'Catar', nameFr: 'Qatar', nameDe: 'Katar', nameRu: 'Катар' },
  { code: 'RO', nameIt: 'Romania', nameEn: 'Romania', nameEs: 'Rumanía', nameFr: 'Roumanie', nameDe: 'Rumänien', nameRu: 'Румыния' },
  { code: 'RU', nameIt: 'Russia', nameEn: 'Russia', nameEs: 'Rusia', nameFr: 'Russie', nameDe: 'Russland', nameRu: 'Россия' },
  { code: 'RW', nameIt: 'Ruanda', nameEn: 'Rwanda', nameEs: 'Ruanda', nameFr: 'Rwanda', nameDe: 'Ruanda', nameRu: 'Руанда' },
  { code: 'KN', nameIt: 'Saint Kitts e Nevis', nameEn: 'Saint Kitts and Nevis', nameEs: 'San Cristóbal y Nieves', nameFr: 'Saint-Christophe-et-Niévès', nameDe: 'St. Kitts und Nevis', nameRu: 'Сент-Китс и Невис' },
  { code: 'LC', nameIt: 'Saint Lucia', nameEn: 'Saint Lucia', nameEs: 'Santa Lucía', nameFr: 'Sainte-Lucie', nameDe: 'St. Lucia', nameRu: 'Сент-Люсия' },
  { code: 'VC', nameIt: 'Saint Vincent e Grenadine', nameEn: 'Saint Vincent and the Grenadines', nameEs: 'San Vicente y las Granadinas', nameFr: 'Saint-Vincent-et-les-Grenadines', nameDe: 'St. Vincent und die Grenadinen', nameRu: 'Сент-Винсент и Гренадины' },
  { code: 'WS', nameIt: 'Samoa', nameEn: 'Samoa', nameEs: 'Samoa', nameFr: 'Samoa', nameDe: 'Samoa', nameRu: 'Самоа' },
  { code: 'SM', nameIt: 'San Marino', nameEn: 'San Marino', nameEs: 'San Marino', nameFr: 'Saint-Marin', nameDe: 'San Marino', nameRu: 'Сан-Марино' },
  { code: 'ST', nameIt: 'Sao Tome e Principe', nameEn: 'Sao Tome and Principe', nameEs: 'Santo Tomé y Príncipe', nameFr: 'Sao Tomé-et-Principe', nameDe: 'São Tomé und Príncipe', nameRu: 'Сан-Томе и Принсипи' },
  { code: 'SA', nameIt: 'Arabia Saudita', nameEn: 'Saudi Arabia', nameEs: 'Arabia Saudí', nameFr: 'Arabie saoudite', nameDe: 'Saudi-Arabien', nameRu: 'Саудовская Аравия' },
  { code: 'SN', nameIt: 'Senegal', nameEn: 'Senegal', nameEs: 'Senegal', nameFr: 'Sénégal', nameDe: 'Senegal', nameRu: 'Сенегал' },
  { code: 'RS', nameIt: 'Serbia', nameEn: 'Serbia', nameEs: 'Serbia', nameFr: 'Serbie', nameDe: 'Serbien', nameRu: 'Сербия' },
  { code: 'SC', nameIt: 'Seychelles', nameEn: 'Seychelles', nameEs: 'Seychelles', nameFr: 'Seychelles', nameDe: 'Seychellen', nameRu: 'Сейшельские Острова' },
  { code: 'SL', nameIt: 'Sierra Leone', nameEn: 'Sierra Leone', nameEs: 'Sierra Leona', nameFr: 'Sierra Leone', nameDe: 'Sierra Leone', nameRu: 'Сьерра-Леоне' },
  { code: 'SG', nameIt: 'Singapore', nameEn: 'Singapore', nameEs: 'Singapur', nameFr: 'Singapour', nameDe: 'Singapur', nameRu: 'Сингапур' },
  { code: 'SK', nameIt: 'Slovacchia', nameEn: 'Slovakia', nameEs: 'Eslovaquia', nameFr: 'Slovaquie', nameDe: 'Slowakei', nameRu: 'Словакия' },
  { code: 'SI', nameIt: 'Slovenia', nameEn: 'Slovenia', nameEs: 'Eslovenia', nameFr: 'Slovénie', nameDe: 'Slowenien', nameRu: 'Словения' },
  { code: 'SB', nameIt: 'Isole Salomone', nameEn: 'Solomon Islands', nameEs: 'Islas Salomón', nameFr: 'Îles Salomon', nameDe: 'Salomonen', nameRu: 'Соломоновы Острова' },
  { code: 'SO', nameIt: 'Somalia', nameEn: 'Somalia', nameEs: 'Somalia', nameFr: 'Somalie', nameDe: 'Somalia', nameRu: 'Сомали' },
  { code: 'ZA', nameIt: 'Sudafrica', nameEn: 'South Africa', nameEs: 'Sudáfrica', nameFr: 'Afrique du Sud', nameDe: 'Südafrika', nameRu: 'ЮАР' },
  { code: 'KR', nameIt: 'Corea del Sud', nameEn: 'South Korea', nameEs: 'Corea del Sur', nameFr: 'Corée du Sud', nameDe: 'Südkorea', nameRu: 'Республика Корея' },
  { code: 'SS', nameIt: 'Sudan del Sud', nameEn: 'South Sudan', nameEs: 'Sudán del Sur', nameFr: 'Soudan du Sud', nameDe: 'Südsudan', nameRu: 'Южный Судан' },
  { code: 'ES', nameIt: 'Spagna', nameEn: 'Spain', nameEs: 'España', nameFr: 'Espagne', nameDe: 'Spanien', nameRu: 'Испания' },
  { code: 'LK', nameIt: 'Sri Lanka', nameEn: 'Sri Lanka', nameEs: 'Sri Lanka', nameFr: 'Sri Lanka', nameDe: 'Sri Lanka', nameRu: 'Шри-Ланка' },
  { code: 'SD', nameIt: 'Sudan', nameEn: 'Sudan', nameEs: 'Sudán', nameFr: 'Soudan', nameDe: 'Sudan', nameRu: 'Судан' },
  { code: 'SR', nameIt: 'Suriname', nameEn: 'Suriname', nameEs: 'Surinam', nameFr: 'Suriname', nameDe: 'Suriname', nameRu: 'Суринам' },
  { code: 'SE', nameIt: 'Svezia', nameEn: 'Sweden', nameEs: 'Suecia', nameFr: 'Suède', nameDe: 'Schweden', nameRu: 'Швеция' },
  { code: 'CH', nameIt: 'Svizzera', nameEn: 'Switzerland', nameEs: 'Suiza', nameFr: 'Suisse', nameDe: 'Schweiz', nameRu: 'Швейцария' },
  { code: 'SY', nameIt: 'Siria', nameEn: 'Syria', nameEs: 'Siria', nameFr: 'Syrie', nameDe: 'Syrien', nameRu: 'Сирия' },
  { code: 'TW', nameIt: 'Taiwan', nameEn: 'Taiwan', nameEs: 'Taiwán', nameFr: 'Taïwan', nameDe: 'Taiwan', nameRu: 'Тайвань' },
  { code: 'TJ', nameIt: 'Tagikistan', nameEn: 'Tajikistan', nameEs: 'Tayikistán', nameFr: 'Tadjikistan', nameDe: 'Tadschikistan', nameRu: 'Таджикистан' },
  { code: 'TZ', nameIt: 'Tanzania', nameEn: 'Tanzania', nameEs: 'Tanzania', nameFr: 'Tanzanie', nameDe: 'Tansania', nameRu: 'Танзания' },
  { code: 'TH', nameIt: 'Thailandia', nameEn: 'Thailand', nameEs: 'Tailandia', nameFr: 'Thaïlande', nameDe: 'Thailand', nameRu: 'Таиланд' },
  { code: 'TL', nameIt: 'Timor Est', nameEn: 'East Timor', nameEs: 'Timor Oriental', nameFr: 'Timor oriental', nameDe: 'Osttimor', nameRu: 'Восточный Тимор' },
  { code: 'TG', nameIt: 'Togo', nameEn: 'Togo', nameEs: 'Togo', nameFr: 'Togo', nameDe: 'Togo', nameRu: 'Того' },
  { code: 'TO', nameIt: 'Tonga', nameEn: 'Tonga', nameEs: 'Tonga', nameFr: 'Tonga', nameDe: 'Tonga', nameRu: 'Тонга' },
  { code: 'TT', nameIt: 'Trinidad e Tobago', nameEn: 'Trinidad and Tobago', nameEs: 'Trinidad y Tobago', nameFr: 'Trinité-et-Tobago', nameDe: 'Trinidad und Tobago', nameRu: 'Тринидад и Тобаго' },
  { code: 'TN', nameIt: 'Tunisia', nameEn: 'Tunisia', nameEs: 'Túnez', nameFr: 'Tunisie', nameDe: 'Tunesien', nameRu: 'Тунис' },
  { code: 'TR', nameIt: 'Turchia', nameEn: 'Turkey', nameEs: 'Turquía', nameFr: 'Turquie', nameDe: 'Türkei', nameRu: 'Турция' },
  { code: 'TM', nameIt: 'Turkmenistan', nameEn: 'Turkmenistan', nameEs: 'Turkmenistán', nameFr: 'Turkménistan', nameDe: 'Turkmenistan', nameRu: 'Туркменистан' },
  { code: 'TV', nameIt: 'Tuvalu', nameEn: 'Tuvalu', nameEs: 'Tuvalu', nameFr: 'Tuvalu', nameDe: 'Tuvalu', nameRu: 'Тувалу' },
  { code: 'UG', nameIt: 'Uganda', nameEn: 'Uganda', nameEs: 'Uganda', nameFr: 'Ouganda', nameDe: 'Uganda', nameRu: 'Уганда' },
  { code: 'UA', nameIt: 'Ucraina', nameEn: 'Ukraine', nameEs: 'Ucrania', nameFr: 'Ukraine', nameDe: 'Ukraine', nameRu: 'Украина' },
  { code: 'AE', nameIt: 'Emirati Arabi Uniti', nameEn: 'United Arab Emirates', nameEs: 'Emiratos Árabes Unidos', nameFr: 'Émirats arabes unis', nameDe: 'Vereinigte Arabische Emirate', nameRu: 'ОАЭ' },
  { code: 'GB', nameIt: 'Regno Unito', nameEn: 'United Kingdom', nameEs: 'Reino Unido', nameFr: 'Royaume-Uni', nameDe: 'Vereinigtes Königreich', nameRu: 'Великобритания' },
  { code: 'US', nameIt: 'Stati Uniti', nameEn: 'United States', nameEs: 'Estados Unidos', nameFr: 'États-Unis', nameDe: 'Vereinigte Staaten', nameRu: 'США' },
  { code: 'UY', nameIt: 'Uruguay', nameEn: 'Uruguay', nameEs: 'Uruguay', nameFr: 'Uruguay', nameDe: 'Uruguay', nameRu: 'Уругвай' },
  { code: 'UZ', nameIt: 'Uzbekistan', nameEn: 'Uzbekistan', nameEs: 'Uzbekistán', nameFr: 'Ouzbékistan', nameDe: 'Usbekistan', nameRu: 'Узбекистан' },
  { code: 'VU', nameIt: 'Vanuatu', nameEn: 'Vanuatu', nameEs: 'Vanuatu', nameFr: 'Vanuatu', nameDe: 'Vanuatu', nameRu: 'Вануату' },
  { code: 'VA', nameIt: 'Città del Vaticano', nameEn: 'Vatican City', nameEs: 'Ciudad del Vaticano', nameFr: 'Cité du Vatican', nameDe: 'Vatikanstadt', nameRu: 'Ватикан' },
  { code: 'VE', nameIt: 'Venezuela', nameEn: 'Venezuela', nameEs: 'Venezuela', nameFr: 'Venezuela', nameDe: 'Venezuela', nameRu: 'Венесуэла' },
  { code: 'VN', nameIt: 'Vietnam', nameEn: 'Vietnam', nameEs: 'Vietnam', nameFr: 'Viêt Nam', nameDe: 'Vietnam', nameRu: 'Вьетнам' },
  { code: 'YE', nameIt: 'Yemen', nameEn: 'Yemen', nameEs: 'Yemen', nameFr: 'Yémen', nameDe: 'Jemen', nameRu: 'Йемен' },
  { code: 'ZM', nameIt: 'Zambia', nameEn: 'Zambia', nameEs: 'Zambia', nameFr: 'Zambie', nameDe: 'Sambia', nameRu: 'Замбия' },
  { code: 'ZW', nameIt: 'Zimbabwe', nameEn: 'Zimbabwe', nameEs: 'Zimbabue', nameFr: 'Zimbabwe', nameDe: 'Simbabwe', nameRu: 'Зимбабве' },
]

// Helper function to get country by code
export function getCountryByCode(code: string): Country | undefined {
  return countries.find(c => c.code === code)
}

// Get country name for a specific language
export function getCountryName(code: string, language: Language): string {
  const country = getCountryByCode(code)
  if (!country) return code
  
  switch (language) {
    case 'it': return country.nameIt
    case 'en': return country.nameEn
    case 'es': return country.nameEs
    case 'fr': return country.nameFr
    case 'de': return country.nameDe
    case 'ru': return country.nameRu
    default: return country.nameIt
  }
}

// Get country names for Google Sheets (Italian and Spanish)
export function getCountryNamesForSheet(code: string): { nameIt: string; nameEs: string } {
  const country = getCountryByCode(code)
  if (country) {
    return { nameIt: country.nameIt, nameEs: country.nameEs }
  }
  return { nameIt: code, nameEs: code } // Fallback to code if not found
}

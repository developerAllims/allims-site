import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Gallery3,
  GalleryLampText,
  Title3,
  Accordion,
  AccordionItem,
  List
} from '../../components'

export const LayoutWins = () => {
  return (
    <Section className="bg-orange-primary" style={{ height: '1007px' }}>
      <SectionContainer>
        <Article
          className="w-full text-center justify-center h-full"
          style={{ padding: '7% 0' }}
        >
          <ArticleContainer className="gap-10">
            <Title3 reverse className="text-white">
              Ganhos com o uso do ALLÌMS
            </Title3>
            <Gallery3>
              <GalleryLampText>
                Redução dos prazos de entrega dos resultados de análise para os
                clientes
              </GalleryLampText>
              <GalleryLampText>
                Redução de custos operacionais do laboratório, possibilitando
                maior volume de amostras com a mesma equipe
              </GalleryLampText>
              <GalleryLampText>
                Aumento da confiabilidade e credibilidade do processo de análise
                e dos resultados gerados para os clientes
              </GalleryLampText>

              <GalleryLampText>
                Facilidade e conforto nas auditorias, pois as informações do dia
                a dia do laboratório estarão disponíveis e acessíveis facilmente
              </GalleryLampText>
              <GalleryLampText>
                Relatórios gerenciais e indicadores de qualidade e dos processos
              </GalleryLampText>
              <GalleryLampText>
                Disponibilidade dos status das amostras, bem dos relatórios de
                ensaios e seus anexos, na web em tempo real
              </GalleryLampText>
            </Gallery3>
            <Accordion className="pt-10">
              <AccordionItem group="Registros">
                <List
                  items={[
                    'Registro eletrônico das informações da coleta das amostras em campo (passar para o primeiro item);',
                    'Registro e rastreabilidade do recebimento ou entrada das amostras no laboratório;',
                    'Redução drástica dos registros manuais em papel e do tempo de resgate de informações, fazendo com que as informações estejam centralizadas;',
                    'Eliminação de erros através do menor número de transcrição de dados e dependendo da situação, aquisição de dados automática através da comunicação com equipamentos e outros sistemas, bem como cálculo automático dos resultados;',
                    'Maior agilidade nos processos laboratoriais, registros de controles e na elaboração dos',
                    'Relatórios de Ensaio;',
                    'Remoção ou mesmo eliminação do uso de planilhas eletrônicas, evitando-se a duplicidade das informações;',
                    'Padronização dos ensaios a serem realizados por tipo de material (amostra);',
                    'Registro dos dados dos ensaios na bancada diretamente no sistema ALLÌMS, eliminando os registros em papel;',
                    'Os dados obtidos por meio dos equipamentos analíticos (balança, cromotógrafo, ICP, etc) são transferidos diretamente para o sistema, sem registro manual;'
                  ]}
                />
              </AccordionItem>
              <AccordionItem group="Gestão">
                <List
                  items={[
                    'Controle e gerenciamento dos planos de amostragem e registro de amostras periódicas;',
                    'Gestão do ciclo de vida das amostras e análises proporcionando controle e aumento da eficiência operacional do laboratório;',
                    'Controle dos insumos e do estoque de laboratório (características, validade e quantidades em estoque, custos, produção de soluções, etc.);',
                    'Controle dos equipamentos e instrumentos do laboratório (calibração, manutenção e intervenções);',
                    'Facilidade de investigação de desvios e tendências de processo, geração de dados estatísticos e visualização histórica dos resultados das matérias-primas e produtos;',
                    'Emissão e envio de resultados e/ ou dos relatórios de análises de forma completamente eletrônica, contribuindo para a redução de custos, diminuição do tempo na  entrega de resultados e garantindo comodidade aos clientes do laboratório;',
                    'Possibilidade de análise do histórico armazenado, permitindo a interpolação entre as informações e avaliações estatísticas;',
                    'Gerenciamento dos planos de controle e especificações dos tipos de materiais;',
                    'Gerenciamento e previsibilidade das amostras a coletar e/ou a receber;',
                    'Mapa de trabalho das situações das amostras no laboratório, por tipo de material, por serviços, por analista e por ensaio;',
                    'Notificações automáticas para lotes de insumos e equipamentos a vencer ou vencidos, além de impedir seu vínculo aos ensaios realizados;',
                    'Gestão das amostras de controle de qualidade analítica: padrões, duplicatas, brancos, curvas de calibração, spikes, surrogates, entre outos;',
                    'Gerenciamento das amostras para liberação, análise crítica e reanálises quando necessário.'
                  ]}
                />
              </AccordionItem>
              <AccordionItem group="Automação">
                <List
                  items={[
                    'Geração de pareceres automáticos para os parâmetros e amostras através da comparação com os limites de especificação e controle de cada tipo da amostra;',
                    'Execução automática de planos de amostragem e registro de amostras periódicas;',
                    'Eliminar esta linha Cálculo automático dos resultados, sendo que o usuário é quem irá definir as regras matemáticas das fórmulas sem depender do Excel;',
                    'Segurança no cálculo do resultado final, uma vez que os dados podem ser transmitidos diretamente do equipamento de leitura para o sistema, evitando-se erro de digitação;',
                    'Distribuição das amostras (lista de tarefas) automática entre os laboratoriais e analistas;',
                    'Cálculo automático dos resultados das análises realizada pelo sistema, conforme regras matemáticas e de comparações cadastradas pelo próprio usuário (analista);',
                    'Os ensaios físico químicos, microbiológicos (tabelas NMP), entre outros, são definidos pelo laboratório e padronizados para os analistas;',
                    'A partir de configurações no sistema, os Relatórios de Ensaios (laudos) poderão ser impressos, enviado por e-mail (PDF) ou disponibilizado via portal Lab.OnLine.',
                    'Notificação automática para os clientes quando as amostras são recebidas e publicadas.'
                  ]}
                />
              </AccordionItem>
              <AccordionItem group="Auditorias / ISO">
                <List
                  items={[
                    'Durante as auditorias o laboratório utiliza um único sistema com informações centralizadas e rastreáveis;',
                    'Facilidade na adequação do laboratório às normas, boas práticas e regulamentações aplicáveis como NBR ISO/IEC 17025, FDA CFR 21 Part 11, RDC 210, EPA, BPLs, etc;',
                    'Rastreabilidade integral das informações armazenadas, incluído a identificação do analista e equipamento pela qual foi gerada;',
                    'Rastreabilidade completa dos equipamentos vinculados aos ensaios;',
                    'Rastreabilidade completa dos insumos, reagentes, soluções, meios de cultura, entre outros;',
                    'O ALLÌMS permite que os requisitos da ISO/IEC 17.025 sejam contemplados facilmente no dia a dia do laboratório;',
                    'Histórico e controle de exames e qualificações dos analistas;',
                    'Gestão dos Treinamentos;',
                    'Registro de não conformidades e tomada de ação;',
                    'Lista mestra de documentos.'
                  ]}
                />
              </AccordionItem>
              <AccordionItem group="TI">
                <List
                  items={[
                    'Aumento da integração do laboratório as demais áreas da empresa, diminuindo o tempo na troca de informações e correção do processo, reduzindo os custos de produção, bem como agilizando e facilitando a liberação dos lotes de matéria-prima para produção e produtos para o mercado;',
                    'Permite a integração com sistemas ERP, para o controle financeiro e administrativo dos serviços analíticos realizados;',
                    'No portal Lab.OnLine os clientes do laboratório podem validar a autenticidade do Relatório de Ensaio.',
                    'Adicionar: Assinatura eletrônica dos signatários, proteção de alta complexidade usando MD-5, chave de validação dos Relatórios de Ensaio.'
                  ]}
                />
              </AccordionItem>
            </Accordion>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}

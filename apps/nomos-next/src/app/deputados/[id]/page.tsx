'use client';

import BoxContainer from '../../../components/box-container';
import CardHeaderDeputyAvatar from '../../../components/card-header-deputy-avatar';
import RowLabelValue from '../../../components/row-label-value';
import { useDeputy } from '../../../hooks/use-deputy';
import { Gabinete } from '../../../interfaces/gabinete';

// Helper function to format address
const getAddress = (gabinete: Gabinete) => {
  if (!gabinete || !gabinete.predio) return '-';
  return `${gabinete.sala} - ${gabinete.predio} - ${gabinete.andar}`;
};

// Helper function to format birthday
const getBirthday = (dateString?: string) => {
  if (!dateString) return '-';
  return new Date(dateString).toLocaleDateString('pt-BR');
};

export default function DeputyPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const { data, isLoading, isError } = useDeputy(id);

  if (isLoading) {
    return (
      <BoxContainer>
        <div className="w-96 h-96 bg-background-paper rounded-lg shadow-lg flex items-center justify-center">
          Carregando...
        </div>
      </BoxContainer>
    );
  }

  if (isError || !data) {
    return (
      <BoxContainer>
        <div className="w-96 h-96 bg-background-paper rounded-lg shadow-lg flex items-center justify-center">
          Erro ao carregar os dados.
        </div>
      </BoxContainer>
    );
  }

  const deputy = data.dados;
  const address = getAddress(deputy.ultimoStatus.gabinete);
  const bday = getBirthday(deputy.dataNascimento);
  const naturalidade = deputy.municipioNascimento ? `${deputy.municipioNascimento} - ${deputy.ufNascimento}` : '-';

  return (
    <BoxContainer>
      <div
        className="bg-background-paper rounded-lg shadow-lg w-96 overflow-hidden"
      >
        <div className="border-b border-divider py-6">
          <CardHeaderDeputyAvatar deputy={deputy} />
        </div>
        <div className="p-6" data-testid="deputy-card-content">
          <RowLabelValue label={'Nome Civil:'} value={deputy.nomeCivil} />
          <RowLabelValue label={'Email:'} value={deputy.ultimoStatus.email} />
          <RowLabelValue label={'Telefone:'} value={deputy.ultimoStatus.gabinete.telefone} />
          <RowLabelValue label={'Endereço:'} value={address} />
          <RowLabelValue label={'Nascimento:'} value={bday} />
          <RowLabelValue
            label={'Naturalidade:'}
            value={naturalidade}
          />
        </div>
      </div>
    </BoxContainer>
  );
}

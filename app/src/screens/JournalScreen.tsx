import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { EmptyState } from '../components/ui/EmptyState';
import { Input } from '../components/ui/Input';
import { Modal } from '../components/ui/Modal';
import { ScreenContainer } from '../components/ui/ScreenContainer';
import { SectionHeader } from '../components/ui/SectionHeader';
import { colors, spacing, typography } from '../theme';

export function JournalScreen() {
  const [visible, setVisible] = useState(false);

  return (
    <ScreenContainer>
      <SectionHeader title="Memory Journal" hint="Capture the quiet moments that matter." />
      <Card style={styles.card}>
        <Text style={styles.title}>Your memories will appear here.</Text>
        <Text style={styles.body}>Start adding reflections, photos, voice notes, and daily moods.</Text>
        <View style={styles.state}>
          <EmptyState title="No entries yet" hint="This space will grow into a personal archive." />
        </View>
        <View style={styles.actions}>
          <Button title="New Memory" onPress={() => setVisible(true)} />
        </View>
      </Card>

      <Modal visible={visible} title="New memory" onClose={() => setVisible(false)}>
        <Input label="Title" placeholder="What happened today?" />
        <Input label="Reflection" placeholder="Write a few gentle lines..." />
        <Button title="Save memory" onPress={() => setVisible(false)} />
      </Modal>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  card: { marginTop: spacing.md },
  title: { color: colors.textPrimary, fontSize: typography.subtitle, fontWeight: '600', marginBottom: 6 },
  body: { color: colors.textSecondary, fontSize: typography.body, lineHeight: 20 },
  state: { marginTop: spacing.md },
  actions: { marginTop: spacing.md },
});
